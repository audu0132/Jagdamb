import pymupdf
import json
import os

doc = pymupdf.open(r'd:\React\Freelace\Jagdamb\public\catalogue\product-catalogue-2026.pdf')

for page_idx in range(len(doc)):
    page = doc[page_idx]
    image_list = page.get_images(full=True)
    text = page.get_text()
    print(f"=== PAGE {page_idx+1} ===")
    print("TEXT:")
    print(text.strip())
    print(f"IMAGES COUNT: {len(image_list)}")
    for img_idx, img_info in enumerate(image_list):
        xref = img_info[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        width = base_image["width"]
        height = base_image["height"]
        print(f"  Img {img_idx+1}: xref={xref}, format={image_ext}, size={width}x{height}, bytes={len(image_bytes)}")
    print("\n" + "="*50 + "\n")
