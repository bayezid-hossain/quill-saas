'use client';
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(visible) => {
        if (!visible) {
          setIsOpen(visible);
        }
      }}
    >
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        <Button className="bg-blue-600 hover:bg-blue-950 transition-all duration-300 font-bold">
          Upload PDF
        </Button>
      </DialogTrigger>
      <DialogContent>Example Content</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
