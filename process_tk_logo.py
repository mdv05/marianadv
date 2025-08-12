from PIL import Image
import numpy as np

# Since we need to save the TK logo from the provided image
# Let's check if we have the TK logo file
import os

# Check for TK logo files
tk_files = [f for f in os.listdir('html') if 'TK' in f.upper() or 'tk' in f.lower()]
print(f"Found TK-related files: {tk_files}")

# If TKManagment.webp exists, convert it to PNG with transparent background
if 'TKManagment.webp' in os.listdir('html'):
    img = Image.open('html/TKManagment.webp')
    print(f"Original TK logo size: {img.size}")
    
    # Convert to RGBA for transparency support
    img = img.convert('RGBA')
    
    # Get the pixel data
    data = img.getdata()
    
    # Create new data with transparent background for white/light pixels
    new_data = []
    for item in data:
        # If the pixel is white or very light (background), make it transparent
        if item[0] > 245 and item[1] > 245 and item[2] > 245:
            new_data.append((255, 255, 255, 0))  # Transparent
        else:
            new_data.append(item)  # Keep original color
    
    # Update image with new data
    img.putdata(new_data)
    
    # Save as PNG with transparency
    img.save('html/tk-logo.png')
    print("TK logo processed and saved as tk-logo.png with transparent background")
else:
    print("TKManagment.webp not found")