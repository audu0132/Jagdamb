import os
import json

with open(r'd:\React\Freelace\Jagdamb\scratch\catalog_dump.json', 'r', encoding='utf-8') as f:
    catalog_data = json.load(f)

extracted_files = os.listdir(r'd:\React\Freelace\Jagdamb\public\images\catalogue')

for page in catalog_data:
    p_num = page['page_num']
    p_images = [f for f in extracted_files if f.startswith(f"p{p_num}_")]
    print(f"==================== PAGE {p_num} ====================")
    print("TEXT:")
    print(page['full_text'].strip())
    print("\nEXTRACTED IMAGES:")
    for img in sorted(p_images):
        print("  -", img)
    print("\n")
