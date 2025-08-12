from PIL import Image, ImageDraw
import os

def create_favicon():
    # Create different sizes for various devices
    sizes = [16, 32, 48, 64, 128, 256]
    
    for size in sizes:
        # Create a new image with a gradient background
        img = Image.new('RGB', (size, size), color='white')
        draw = ImageDraw.Draw(img)
        
        # Create gradient background (blue to cyan)
        for y in range(size):
            # Gradient from #00B4D8 to #0077B6
            ratio = y / size
            r = int(0 * (1 - ratio) + 0 * ratio)
            g = int(180 * (1 - ratio) + 119 * ratio)
            b = int(216 * (1 - ratio) + 182 * ratio)
            draw.rectangle([(0, y), (size, y+1)], fill=(r, g, b))
        
        # Add white circle background for text
        padding = size // 6
        draw.ellipse(
            [(padding, padding), (size - padding, size - padding)],
            fill='white'
        )
        
        # Draw a stylized "M" using lines (more reliable than fonts)
        line_width = max(1, size // 16)
        m_color = '#0077B6'
        
        # Calculate M dimensions
        m_padding = size // 3
        left_x = m_padding
        right_x = size - m_padding
        top_y = m_padding
        bottom_y = size - m_padding
        mid_x = size // 2
        
        # Draw M shape with lines
        # Left vertical line
        draw.line([(left_x, bottom_y), (left_x, top_y)], fill=m_color, width=line_width)
        # Left diagonal to center
        draw.line([(left_x, top_y), (mid_x, bottom_y - (size // 4))], fill=m_color, width=line_width)
        # Right diagonal from center
        draw.line([(mid_x, bottom_y - (size // 4)), (right_x, top_y)], fill=m_color, width=line_width)
        # Right vertical line
        draw.line([(right_x, top_y), (right_x, bottom_y)], fill=m_color, width=line_width)
        
        # Save the favicon
        filename = f'html/favicon-{size}x{size}.png'
        img.save(filename, 'PNG')
        print(f"Created {filename}")
        
        # Also create the standard favicon.ico with the 32x32 size
        if size == 32:
            img.save('html/favicon.ico', 'ICO')
            print("Created html/favicon.ico")
    
    # Create Apple Touch Icon (180x180)
    apple_size = 180
    img = Image.new('RGB', (apple_size, apple_size), color='white')
    draw = ImageDraw.Draw(img)
    
    # Gradient background
    for y in range(apple_size):
        ratio = y / apple_size
        r = int(0 * (1 - ratio) + 0 * ratio)
        g = int(180 * (1 - ratio) + 119 * ratio)
        b = int(216 * (1 - ratio) + 182 * ratio)
        draw.rectangle([(0, y), (apple_size, y+1)], fill=(r, g, b))
    
    # White circle
    padding = apple_size // 6
    draw.ellipse(
        [(padding, padding), (apple_size - padding, apple_size - padding)],
        fill='white'
    )
    
    # Draw M shape
    line_width = max(1, apple_size // 16)
    m_color = '#0077B6'
    m_padding = apple_size // 3
    left_x = m_padding
    right_x = apple_size - m_padding
    top_y = m_padding
    bottom_y = apple_size - m_padding
    mid_x = apple_size // 2
    
    draw.line([(left_x, bottom_y), (left_x, top_y)], fill=m_color, width=line_width)
    draw.line([(left_x, top_y), (mid_x, bottom_y - (apple_size // 4))], fill=m_color, width=line_width)
    draw.line([(mid_x, bottom_y - (apple_size // 4)), (right_x, top_y)], fill=m_color, width=line_width)
    draw.line([(right_x, top_y), (right_x, bottom_y)], fill=m_color, width=line_width)
    
    img.save('html/apple-touch-icon.png', 'PNG')
    print("Created html/apple-touch-icon.png")

if __name__ == "__main__":
    create_favicon()
    print("\nAll favicons created successfully!")