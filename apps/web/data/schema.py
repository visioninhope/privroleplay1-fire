import json

# File path
file_path = 'C:\\Users\\swara\\OneDrive\\Desktop\\Theta Networks\\privroleplay1\\apps\\web\\data\\charlinks.json'

# Read the existing links from the JSON file
try:
    with open(file_path, 'r', encoding='utf-8') as file:
        char_links = json.load(file)
except Exception as e:
    print(f"Error reading character links: {e}")
    exit(1)

# Add index to each link
indexed_char_links = [{"index": idx, "link": link} for idx, link in enumerate(char_links)]

# Write the updated links back to the JSON file
try:
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(indexed_char_links, file, indent=4)
    print(f"Indexed character links successfully written to {file_path}")
except Exception as e:
    print(f"Error writing indexed character links: {e}")