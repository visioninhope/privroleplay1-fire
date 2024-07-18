import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@repo/ui/src/components/card";
import { Input } from "@repo/ui/src/components/input";
import { Textarea } from "@repo/ui/src/components/textarea";
import { Button } from "@repo/ui/src/components/button";
import { ArrowLeft, Book, Plus, UploadCloud } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/src/components/form";
import { useAction, useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useResponsivePopover } from "@repo/ui/src/hooks/use-responsive-popover";
import { RadioGroup, RadioGroupItem } from "@repo/ui/src/components/radio";
import { Label } from "@repo/ui/src/components/label";
import { toast } from "sonner";
import { Id } from "../../convex/_generated/dataModel";

import DraftBadge from "./saving-badge";
import SavingBadge from "./saving-badge";
import Image from "next/image";
import { InfoTooltip, Tooltip } from "@repo/ui/src/components";
import { Crystal } from "@repo/ui/src/components/icons";
import Spinner from "@repo/ui/src/components/spinner";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import RemixBadge from "./remix-badge";
import { ModelSelect } from "./model-select";
import { ArchiveButton } from "./archive-button";
import { useTranslation } from "react-i18next";
import { Checkbox } from "@repo/ui/src/components/checkbox";
import { VoiceSelect } from "./voice-select";

const formSchema = z.object({
  name: z.string().max(24),
  description: z.string().max(128),
  instructions: z.string().max(512),
  greetings: z.optional(z.string().max(1024)),
  model: z.string(),
  isNSFW: z.boolean(),
  voiceId: z.string(),
});

export default function CharacterForm() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const id = searchParams.get("id") as Id<"characters">;
  const remixId = searchParams.get("remixId") as Id<"characters">;
  const [characterId, setCharacterId] = useState<Id<"characters"> | undefined>(
    id,
  );
  const remixCharacter = useQuery(
    api.characters.get,
    remixId ? { id: remixId } : "skip",
  );
  const character = useQuery(
    api.characters.get,
    id ? { id } : characterId ? { id: characterId } : "skip",
  );
  const isEdit = searchParams.get("isEdit") || false;
  const router = useRouter();
  const {
    name = searchParams.get("name") || "",
    description = searchParams.get("description") || "",
    instructions = searchParams.get("instructions") || "",
    greetings = searchParams.get("greetings") || "Hi.",
    cardImageUrl = searchParams.get("cardImageUrl") || "",
    model = (searchParams.get("model") as any) || "anthropic/claude-3-haiku",
    voiceId = (searchParams.get("voiceId") as any) || "MjxppkSa4IoDSRGySayZ",
    isDraft = searchParams.get("isDraft") || true,
    isNSFW = Boolean(searchParams.get("isNSFW")) || false,
    visibility: _visibility = searchParams.get("visibility") || "private",
  } = character || remixCharacter || {};

  const upload = useAction(api.image.upload);
  const upsert = useMutation(api.characters.upsert);
  const publish = useMutation(api.characters.publish);
  const generateInstruction = useMutation(api.characters.generateInstruction);
  const [visibility, setVisibility] = useState(_visibility);
  const { Popover, PopoverContent, PopoverTrigger, isMobile } =
    useResponsivePopover();

  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isGeneratingInstructions, setIsGeneratingInstructions] =
    useState(false);

  const imageInput = useRef<HTMLInputElement>(null);
  const [openPopover, setOpenPopover] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      description,
      instructions,
      greetings: Array.isArray(greetings) ? greetings[0] : greetings,
      model,
      voiceId,
      isNSFW,
    },
  });

  useEffect(() => {
    form.reset({
      name,
      description,
      instructions,
      greetings: Array.isArray(greetings) ? greetings[0] : greetings,
      model,
      voiceId,
      isNSFW,
    });
  }, [
    character,
    name,
    description,
    instructions,
    greetings,
    model,
    voiceId,
    isNSFW,
  ]);

  useEffect(() => {
    setVisibility(_visibility);
  }, [_visibility]);

  useEffect(() => {
    cardImageUrl && setIsGeneratingImage(false);
  }, [cardImageUrl]);

  useEffect(() => {
    instructions && setIsGeneratingInstructions(false);
  }, [instructions]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { greetings, ...otherValues } = values;
    const character = await upsert({
      ...(characterId ? { id: characterId } : {}),
      greetings: [greetings as string],
      ...otherValues,
      ...(cardImageUrl ? { cardImageUrl } : {}),
      ...(remixId ? { remixId } : {}),
    });
    character && setCharacterId(character);
    return character;
  }

  async function handleUploadImage(uploadedImage: File) {
    const newCharacterId = await onSubmit(form.getValues());
    const validImageTypes = [
      "image/gif",
      "image/jpeg",
      "image/png",
      "image/webp",
    ];
    if (!validImageTypes.includes(uploadedImage.type)) {
      toast.error(
        "Invalid file type. Please upload a valid image file (gif, jpeg, png)",
      );
      return;
    }
    if (uploadedImage.size > 5242880) {
      toast.error("File size should be less than 5MB");
      return;
    }
    const imageBytes = await uploadedImage.arrayBuffer();
    const characterCardImageUrl = await upload({
      file: imageBytes,
      filename: uploadedImage?.name,
      fileType: uploadedImage?.type,
    });
    const promise = upsert({
      ...(characterId
        ? { id: characterId }
        : newCharacterId
          ? { id: newCharacterId as Id<"characters"> }
          : {}),
      cardImageUrl: characterCardImageUrl,
    });
    toast.promise(promise, {
      loading: "Uploading character card...",
      success: (character) => {
        character && setCharacterId(character);
        return `Character card has been uploaded.`;
      },
      error: (error) => {
        return error
          ? (error.data as { message: string }).message
          : "Unexpected error occurred";
      },
    });
  }

  const debouncedSubmitHandle = useDebouncedCallback(onSubmit, 1000);
  const isInstructionGenerationDisabled =
    !form.getValues().name ||
    !form.getValues().description ||
    isGeneratingInstructions;
  return (
    <Card className="h-full w-full overflow-hidden rounded-b-none border-transparent shadow-none lg:border-border lg:shadow-xl">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div className="flex items-center gap-2">
            <Link href="/my">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            {isEdit ? t("Edit Character") : t("New Character")}
            {form.formState.isSubmitting ? (
              <SavingBadge />
            ) : form.formState.isDirty && isDraft ? (
              <DraftBadge />
            ) : null}
            {remixId && <RemixBadge />}
          </div>
          <div className="flex items-center gap-2">
            {characterId ? (
              <ArchiveButton characterId={characterId} />
            ) : (
              <Link href="https://docs.openroleplay.ai">
                <Button variant="outline" className="gap-1">
                  <Book className="h-4 w-4" />
                  {t("Docs")}
                </Button>
              </Link>
            )}
            <Popover
              open={openPopover}
              onOpenChange={
                isMobile ? undefined : () => setOpenPopover(!openPopover)
              }
              onClose={isMobile ? () => setOpenPopover(false) : undefined}
            >
              <PopoverContent className="p-4 pb-8 lg:w-full lg:rounded-lg lg:bg-background lg:p-2 lg:pb-2">
                <RadioGroup
                  defaultValue={visibility ?? "private"}
                  className="p-1"
                  value={visibility}
                  onValueChange={(value) => setVisibility(value)}
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {t("Publish to")}
                  </span>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="public" id="public" />
                    <Label
                      className="flex items-center justify-center gap-1 font-normal"
                      htmlFor="public"
                    >
                      {t("Public")}
                      <Tooltip
                        content={t(
                          "You can earn crystals whenever other users interact with the characters you've created.",
                        )}
                      >
                        <div className="flex items-center justify-center text-[8px] text-muted-foreground">
                          ({t("Earn")}{" "}
                          <Crystal className="h-3 w-3 text-muted-foreground" />)
                        </div>
                      </Tooltip>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="private" id="private" />
                    <Label className="font-normal" htmlFor="private">
                      {t("Only me")}
                    </Label>
                  </div>
                  <span className="text-[10px] text-muted-foreground/75 underline">
                    <Link href="/content-rules">
                      By clicking 'Publish', you agree to our content rules.
                    </Link>
                  </span>
                </RadioGroup>
                <div className="flex flex-col justify-center pt-4">
                  <Button
                    onClick={async () => {
                      const newCharacterId = await onSubmit(form.getValues());
                      const charId = characterId
                        ? characterId
                        : (newCharacterId as Id<"characters">);
                      charId &&
                        (() => {
                          const promise = publish({
                            id: charId,
                            visibility: visibility as any,
                          });
                          toast.promise(promise, {
                            loading: "Publishing character...",
                            success: (data: any) => {
                              data
                                ? router.push(`/character/${data}`)
                                : router.back();
                              return `Character has been saved.`;
                            },
                            error: (error) => {
                              return error
                                ? (error.data as { message: string }).message
                                : "Unexpected error occurred";
                            },
                          });
                        })();
                    }}
                    className="flex h-7 w-full gap-1 text-xs"
                  >
                    <UploadCloud className="text-foreground-primary h-4 w-4" />
                    {visibility === "public" ? t("Publish") : t("Save")}
                  </Button>
                </div>
              </PopoverContent>
              <PopoverTrigger asChild>
                <Button
                  onClick={() => {
                    setOpenPopover(!openPopover);
                  }}
                >
                  {t("Save")}
                </Button>
              </PopoverTrigger>
            </Popover>
          </div>
        </CardTitle>
        <CardDescription>
          {t("Configure your character details.")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="my-4 flex w-full flex-col items-center justify-center gap-4">
          <Label
            htmlFor="card"
            className="relative flex h-[350px] w-[200px] cursor-pointer flex-col items-center justify-center gap-2 rounded border border-dashed duration-200 hover:-translate-y-1 hover:border-border hover:shadow-lg"
          >
            {cardImageUrl ? (
              <Image
                src={cardImageUrl}
                alt={"Preview of character card"}
                width={300}
                height={525}
                className="absolute h-full w-full rounded object-cover"
              />
            ) : (
              <>
                <Plus />
                <div className="flex flex-col items-center justify-center">
                  {t("Add character card")}
                  <span className="text-xs text-muted-foreground">
                    Best size: 1024x1792
                  </span>
                </div>
                <span className="text-xs">or</span>
                <Link
                  href={`/images${
                    form.getValues()?.description
                      ? `?prompt=${form.getValues()?.description}`
                      : ""
                  }`}
                >
                  <Button variant="outline">{t("Generate")}</Button>
                </Link>
              </>
            )}
          </Label>
          <Input
            id="card"
            type="file"
            accept="image/*"
            ref={imageInput}
            onChange={(event: any) => {
              handleUploadImage(event.target.files![0]);
            }}
            className="hidden"
          />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(debouncedSubmitHandle)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1">
                    {t("Name")}
                    <InfoTooltip
                      content={
                        "Name used by the character in conversations and what other users will see if the character is public."
                      }
                    />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={t("Name your character")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1">
                    {t("Description")}{" "}
                    <span className="text-muted-foreground">
                      {t("(optional)")}
                    </span>
                    <InfoTooltip
                      content={
                        "Description is a brief way to describe the Character and scenario. It acts like a name in character listings."
                      }
                    />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t(
                        "Add a short description about this character",
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instructions"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel className="flex items-center gap-1">
                      {t("Instructions")}{" "}
                      <span className="text-muted-foreground">
                        {t("(optional)")}
                      </span>
                      <InfoTooltip
                        content={
                          "With Instructions, you can have the Character describe themselves (traits, history, example quotes, mannerisms, etc.) and specify the topics they prefer to talk about."
                        }
                      />
                    </FormLabel>
                    <Tooltip
                      content={
                        isInstructionGenerationDisabled
                          ? "Write character name and description to generate instruction"
                          : "Generate character instruction"
                      }
                    >
                      <Button
                        className="flex h-8 gap-1"
                        variant="ghost"
                        disabled={isInstructionGenerationDisabled}
                        onClick={async () => {
                          setIsGeneratingInstructions(true);
                          const formValues = form.getValues();
                          const newCharacterId = await onSubmit(formValues);
                          await generateInstruction({
                            characterId: characterId
                              ? characterId
                              : (newCharacterId as Id<"characters">),
                            name: formValues.name ? formValues.name : name,
                            description: formValues.description
                              ? formValues.description
                              : description,
                          });
                        }}
                      >
                        {isGeneratingInstructions ? (
                          <>
                            <Spinner />
                            Generating...
                          </>
                        ) : (
                          <>
                            {t("Generate")}
                            <Crystal className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </Tooltip>
                  </div>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px]"
                      placeholder={t(
                        "What does this character do? How does they behave? What should they avoid doing?",
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="greetings"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1">
                    {t("Greeting")}
                    <span className="text-muted-foreground">
                      {t("(optional)")}
                    </span>
                    <InfoTooltip
                      content={
                        "The first thing your Character will say when starting a new conversation. Greeting can have a large impact on chat."
                      }
                    />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="The first message from character to user"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isNSFW"
              render={({ field }) => (
                <div className="flex flex-col space-y-2">
                  <FormLabel className="flex gap-1">
                    {t("Mature content")}
                    <span className="text-muted-foreground">
                      {t("(optional)")}
                    </span>
                  </FormLabel>
                  <FormItem className="flex items-center space-x-2 pt-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="pb-2 font-normal">
                      {t("This character is intended for adult.")}
                    </FormLabel>
                  </FormItem>
                  <FormDescription>
                    {t("Check this to enable uncensored models.")}
                  </FormDescription>
                </div>
              )}
            />
            <ModelSelect
              form={form}
              model={model}
              isNSFW={form.getValues("isNSFW")}
            />
            <VoiceSelect form={form} voiceId={voiceId} />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="pb-32"></CardFooter>
    </Card>
  );
}
