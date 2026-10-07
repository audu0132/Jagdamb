import pymupdf
import json

doc = pymupdf.open(r'd:\React\Freelace\Jagdamb\public\catalogue\product-catalogue-2026.pdf')

pages_data = []

for page_idx in range(len(doc)):
    page = doc[page_idx]
    p_num = page_idx + 1
    
    # get text blocks
    text_blocks = []
    for b in page.get_text("blocks"):
        # b: (x0, y0, x1, y1, text, block_no, block_type)
        if b[6] == 0: # text
            text_blocks.append({
                "bbox": [round(coord, 1) for coord in b[:4]],
                "text": b[4].strip()
            })
            
    # get image rects
    img_list = page.get_images(full=True)
    img_rects = []
    for img_idx, img_info in enumerate(img_list):
        xref = img_info[0]
        # find where this image is placed on page
        rects = page.get_image_rects(xref)
        base_img = doc.extract_image(xref)
        for r in rects:
            img_rects.append({
                "xref": xref,
                "bbox": [round(coord, 1) for coord in [r.x0, r.y0, r.x1, r.y1]],
                "width": base_img["width"],
                "height": base_img["height"],
                "ext": base_img["ext"]
            })
            
    pages_data.append({
        "page": p_num,
        "width": round(page.rect.width, 1),
        "height": round(page.rect.height, 1),
        "text_blocks": text_blocks,
        "images": img_rects
    })

with open(r'd:\React\Freelace\Jagdamb\scratch\spatial_catalog.json', 'w', encoding='utf-8') as f:
    json.dump(pages_data, f, ensure_ascii=False, indent=2)

print("Saved spatial layout to scratch/spatial_catalog.json")
