import fitz
import json

pdf_path = r'C:\Users\ASUS\Downloads\CAT-MA-815BS.pdf'
doc = fitz.open(pdf_path)
print(f"Total pages: {len(doc)}")

for i, page in enumerate(doc):
    print(f"\n--- PAGE {i+1} ---")
    print(page.get_text())
    images = page.get_images()
    print(f"Images count: {len(images)}")
    for j, img in enumerate(images):
        xref = img[0]
        base = doc.extract_image(xref)
        print(f"  Image {j}: xref {xref}, format {base['ext']}, size {base['width']}x{base['height']}")
