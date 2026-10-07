import pymupdf
import os

pdf_path = r'd:\React\Freelace\Jagdamb\public\catalogue\product-catalogue-2026.pdf'
doc = pymupdf.open(pdf_path)

output_dir = r'd:\React\Freelace\Jagdamb\public\images\catalogue'
os.makedirs(output_dir, exist_ok=True)

print(f"Extracting images from {pdf_path} into {output_dir}...")

saved_images = []

for page_num in range(len(doc)):
    page = doc[page_num]
    image_list = page.get_images(full=True)
    print(f"Page {page_num + 1}: found {len(image_list)} images")
    
    for img_idx, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        width = base_image["width"]
        height = base_image["height"]
        
        # Filter out tiny icons (like 10x10 or borders)
        if width < 50 or height < 50:
            continue
            
        filename = f"p{page_num + 1}_img{img_idx + 1}_{width}x{height}.{image_ext}"
        filepath = os.path.join(output_dir, filename)
        
        with open(filepath, "wb") as f:
            f.write(image_bytes)
            
        saved_images.append({
            "page": page_num + 1,
            "filename": filename,
            "width": width,
            "height": height,
            "bytes": len(image_bytes)
        })

print(f"Total extracted valid images: {len(saved_images)}")
