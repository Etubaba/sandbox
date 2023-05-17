import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { BsCheck2Circle } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';

export default function ImageDialogs({opens,setOpen, message, title,link, image, buttontext}) {
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  
  };
  const router = useRouter()

  return (
    
      // <Dialog
      //   open={opens}
      //   onClose={handleClose}
      //   aria-labelledby="alert-dialog-title"
      //   aria-describedby="alert-dialog-description"
      // >
      <div className={`fixed backdrop-blur-md h-screen w-screen flex place-items-center place-content-center  z-50 ${!opens && "hidden"}`}
      onClick={handleClose}>
          
        <div className="bg-white h-fit md:w-3/6 md:h-5/6 w-5/6 rounded-lg border-2 border-white shadow-xl flex flex-col">
            <img
              src={image}
              className="object-cover h-4/6"
              alt={message}
            />
      <div className='p-4'>
        <p className="text-xl font-bold text-black">
          {title}
        </p>
        <p className="text-sm mt-2 text-gray-700 md:line-clamp-4 line-clamp-6">
          {message}
        </p>

        <div className="flex gap-2 mt-2">
        <a href={link} className="p-2 bg-p_blue text-white w-fit"> {buttontext} </a>
        <Button size="small" color='secondary' type="secondary" onClick={handleClose}>Dismiss</Button>
        </div>
      </div>
    
    </div>
    
    </div>
      /* </Dialog> */
    
  );
}
