import React from 'react'
import { useState } from 'react'
import './Switch.css';


export default function Switch() {
  return (
      <>
        <p>Switch</p>
        <label className="switch">
        <input type="checkbox" id="togBtn" />
        <div className="slider round"></div>
        </label>
        </>
  )
}