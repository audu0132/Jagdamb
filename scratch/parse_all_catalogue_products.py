import pymupdf
import json
import re
import os

doc = pymupdf.open(r'd:\React\Freelace\Jagdamb\public\catalogue\product-catalogue-2026.pdf')

# We want to extract every product accurately:
# Categories to organize them into:
# 1. "Milking Machines" (pages 2 to 8)
# 2. "Milking Sets & Buckets" (page 9)
# 3. "Pulsators" (pages 10 to 11)
# 4. "Claws" (pages 11 to 12)
# 5. "Liners & Cups" (pages 13, 18)
# 6. "Milking & Vacuum Tubes" (page 14)
# 7. "Gaskets & Cleaning Brushes" (page 15)
# 8. "Valves, Regulators & Spares" (pages 16, 17, 18)
# 9. "Vacuum & Monoblock Pumps" (pages 19, 20)
# 10. "Electric Motors" (pages 21, 22)

# Let's inspect pages text in detail and write the structured product dictionary.
products = []

print("Extracting detailed product records...")
