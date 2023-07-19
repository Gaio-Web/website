import { Button, Snackbar } from '@mui/material';
import { useState } from 'react';

interface ICopyToClipboardButtonProps {
  path: string;
  text: string;
  btnColor?: string;
}

const CopyToClipboardButton = ({ path, text, btnColor }: ICopyToClipboardButtonProps) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
        navigator.clipboard.writeText(path);
    };

    return (
        <>
            <Button
                onClick={handleClick}
                sx={{ width: '50%', backgroundColor: btnColor}}
                variant="contained"
            >
                {text}
            </Button>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message="Endereço copiado!"
            />
        </>
    );
};

export default CopyToClipboardButton;
