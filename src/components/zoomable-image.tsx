'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { Box } from '@chakra-ui/react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  maxWidth?: string;
  borderRadius?: string;
}

export function ZoomableImage({ 
  src, 
  alt, 
  maxWidth = '800px',
  borderRadius = '8px'
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
          _hover={{ opacity: 0.9 }}
          transition="opacity 0.2s"
        >
          <img 
            src={src}
            alt={alt}
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
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
      />
    </>
  );
}
