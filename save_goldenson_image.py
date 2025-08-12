import base64
import os

# Since we need to save the image from the screenshot provided,
# I'll create a script that can be used to save the image
print("Please save the MassMutual MyCoverage image as 'goldenson-case-study.png' in the html folder")
print("Location: /Users/marianaduong-vazquez/Documents/GitHub/marianadv/html/goldenson-case-study.png")

# Check if image exists
image_path = "/Users/marianaduong-vazquez/Documents/GitHub/marianadv/html/goldenson-case-study.png"
if os.path.exists(image_path):
    print(f"✓ Image found at {image_path}")
else:
    print(f"✗ Image not found. Please save the image to {image_path}")