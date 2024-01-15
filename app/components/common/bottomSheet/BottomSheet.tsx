"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

interface BottomSheetPropsI {
  open: boolean;
  children: React.ReactElement;
  title?: string;
  onClose?: () => void;
}

export default function BottomSheet({
  open,
  children,
  title,
  onClose,
}: BottomSheetPropsI) {
  return (
    <div className={`bottomSheet ${open && "open"}`}>
      <div className="sheetContent">
        <div className="sheetHeader">
          <h2>{title}</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className="sheetBody">{children}</div>
      </div>
    </div>
  );
}
