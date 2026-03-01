'use client';

/**
 * ZoomableImage Component
 * 
 * A reusable image component with zoom and fullscreen features.
 * Uses yet-another-react-lightbox library for lightbox functionality.
 * 
 * Features:
 * - Click to open image in lightbox
 * - Zoom in/out with mouse wheel or pinch gestures
 * - Fullscreen mode
 * - Responsive sizing
 * - Clean display for transparent images
 * 
 * Usage:
 * ```tsx
 * <ZoomableImage 
 *   src="https://example.com/image.png"
 *   alt="Image description"
 *   maxWidth="800px"
 * />
 * ```
 */

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Box } from '@chakra-ui/react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  maxWidth?: string;
}

export function ZoomableImage({ 
  src, 
  alt, 
  maxWidth = '800px'
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box mb="6" display="flex" justifyContent="center" w="full">
        <Box 
          position="relative" 
          w="full" 
          maxW={maxWidth} 
          h="auto"
          cursor="pointer"
          onClick={() => setOpen(true)}
          transition="all 0.3s"
          _hover={{ 
            opacity: 0.8
          }}
        >
          <img 
            src={src}
            alt={alt}
            style={{ 
              width: '100%', 
              height: 'auto',
              display: 'block'
            }}
          />
        </Box>
      </Box>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src, alt }]}
        plugins={[Fullscreen, Zoom]}
        zoom={{
          maxZoomPixelRatio: 5,
          scrollToZoom: true,
        }}
        fullscreen={{
          auto: false,
        }}
        carousel={{
          finite: true,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        styles={{
          container: { backgroundColor: 'white' },
          navigationPrev: { display: 'none' },
          navigationNext: { display: 'none' },
        }}
      />
    </>
  );
}
