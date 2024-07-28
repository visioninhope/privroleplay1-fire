import json

# Load the data from models.json
file_path = 'C:/Users/swara/OneDrive/Desktop/Theta Networks/privroleplay1/apps/web/data/models.json'

# Load the data from models.json
with open(file_path, 'r') as f:
    data = json.load(f)

# Function to transform the data
def transform_data(data):
    new_format = []
    for item in data:
        new_item = {
            'capabilities': None,
            'cardImageUrl': item.get('cardImageUrl', "").replace("/_next/image?url=", "").replace("&w=640&q=80", ""),
            'creatorId': "",
            'description': item.get('description', ""),
            'embedding': None,
            'genderTag': "",
            'genreTag': "",
            'greetings': item.get('greetings', None),
            'instructions': item.get('instructions', ""),
            'isArchived': False,
            'isBlacklisted': False,
            'isDraft': item.get('isDraft', False),
            'isModel': True,  # assuming 'isModel' is always True as per your example
            'isNSFW': item.get('isNSFW', False),
            'knowledge': "",
            'languageTag': "",
            'model': item.get('model', ""),
            'name': item.get('name', ""),
            'numChats': item.get('numChats', 0),
            'numUsers': 0,
            'personalityTag': "",
            'remixId': "",
            'roleTag': "",
            'score': 0,
            'updatedAt': "",
            'visibility': item.get('visibility', ""),
            'voiceId': item.get('voiceId', ""),
        }
        new_format.append(new_item)
    return new_format

# Transform the data
transformed_data = transform_data(data)

# Save the transformed data to a new JSON file
with open('transformed_models1.json', 'w') as f:
    json.dump(transformed_data, f, indent=2)

# Print the transformed data for verification
print(json.dumps(transformed_data, indent=2))