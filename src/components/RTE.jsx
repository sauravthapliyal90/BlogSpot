import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';
import {Input} from './index'


export default function RTE({label, }) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Input  placeholder = 'Conntent' />
     </div>
  )
}

