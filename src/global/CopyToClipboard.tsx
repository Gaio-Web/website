import { Button, Snackbar } from '@mui/material';
import { useState } from 'react';

interface ICopyToClipboardButtonProps {
  path: string;
  text: string;
  btnColor?: string;
  btnBorder?: string;
}

const CopyToClipboardButton = ({ path, text, btnColor, btnBorder }: ICopyToClipboardButtonProps) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
        navigator.clipboard.writeText(path);
    };

    return (
        <>
            <Button
                onClick={handleClick}
                sx={{ width: '100%', backgroundColor: btnColor, borderRadius: btnBorder}}
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
