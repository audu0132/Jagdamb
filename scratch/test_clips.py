import pymupdf
import os

doc = pymupdf.open(r'd:\React\Freelace\Jagdamb\public\catalogue\product-catalogue-2026.pdf')
out_dir = r'd:\React\Freelace\Jagdamb\public\images\catalogue\products'
os.makedirs(out_dir, exist_ok=True)

# Test rendering a clean clip of MB20 Nano (Page 2 top) vs extracted image
page2 = doc[1]
# Page 2 size: 595.5 x 842.2
# Top product photo is approximately x: 20 to 520, y: 70 to 340
clip_nano = pymupdf.Rect(40, 70, 550, 340)
pix = page2.get_pixmap(clip=clip_nano, dpi=200)
pix.save(os.path.join(out_dir, "test_mb20_nano_clip.png"))

# Bottom product MB20 Square: y: 450 to 710
clip_square = pymupdf.Rect(40, 450, 550, 710)
pix2 = page2.get_pixmap(clip=clip_square, dpi=200)
pix2.save(os.path.join(out_dir, "test_mb20_square_clip.png"))

print("Saved test clips!")
