from PIL import Image, ImageDraw
import numpy as np

def make_circular(input_path, output_path):
    # Open the image
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Create a new image with transparent background
    output = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    
    # Create a circular mask
    mask = Image.new('L', (width, height), 0)
    draw = ImageDraw.Draw(mask)
    
    # Calculate the circle parameters (assuming the logo is centered)
    center_x = width // 2
    center_y = height // 2
    radius = min(width, height) // 2 - 5  # Slightly smaller to ensure clean edges
    
    # Draw a filled circle on the mask
    draw.ellipse(
        [(center_x - radius, center_y - radius), 
         (center_x + radius, center_y + radius)], 
        fill=255
    )
    
    # Apply the mask to make the image circular
    output.paste(img, (0, 0))
    output.putalpha(mask)
    
    # Save the result
    output.save(output_path, 'PNG')
    print(f"Circular logo saved to {output_path}")

# Process the Sicily logo
make_circular(
    '/Users/marianaduong-vazquez/Documents/GitHub/marianadv/html/sicily-logo.png',
    '/Users/marianaduong-vazquez/Documents/GitHub/marianadv/html/sicily-logo-circular.png'
)

# Also replace the original with the circular version
make_circular(
    '/Users/marianaduong-vazquez/Documents/GitHub/marianadv/html/sicily-logo.png',
    '/Users/marianaduong-vazquez/Documents/GitHub/marianadv/html/sicily-logo.png'
)