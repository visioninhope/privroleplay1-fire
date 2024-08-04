$branchesToDelete = @(
    "backup-branch",
    "backup-branch-2",
    "fixes",
    "maintemp",
    "newbranch",
    "newmain",
    "thetaintegration",
    "wallet"
)

# Iterate over each branch and delete it locally and from GitHub
foreach ($branch in $branchesToDelete) {
    Write-Host "Deleting branch locally: $branch"
    git branch -D $branch

    Write-Host "Deleting branch from GitHub: $branch"
    git push origin --delete $branch
}