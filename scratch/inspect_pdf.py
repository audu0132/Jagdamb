import fitz
import json

doc = fitz.open(r'C:\Users\ASUS\Downloads\SAI AGRO 2026 (8).pdf')
print(f"Total Page Count: {len(doc)}")

catalog_data = []

for i, page in enumerate(doc):
    text = page.get_text()
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    images = page.get_images()
    page_info = {
        "page_num": i + 1,
        "image_count": len(images),
        "text_preview": lines[:6],
        "full_text": text
    }
    catalog_data.append(page_info)
    print(f"--- Page {i+1} (Images: {len(images)}) ---")
    print("\n".join(lines[:8]))
    print("-" * 40)

with open(r'scratch\catalog_dump.json', 'w', encoding='utf-8') as f:
    json.dump(catalog_data, f, ensure_ascii=False, indent=2)

print("\nDumped to scratch/catalog_dump.json")
