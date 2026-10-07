import json

with open(r'd:\React\Freelace\Jagdamb\scratch\spatial_catalog.json', encoding='utf-8') as f:
    data = json.load(f)

for p in data[1:4]:
    print(f"=== PAGE {p['page']} (W:{p['width']}, H:{p['height']}) ===")
    print("IMAGES:")
    for img in p['images']:
        print(f"  bbox={img['bbox']}, size={img['width']}x{img['height']}, xref={img['xref']}")
    print("TEXT BLOCKS:")
    for b in p['text_blocks']:
        print(f"  bbox={b['bbox']}: {b['text']}")
    print("\n" + "="*50 + "\n")
