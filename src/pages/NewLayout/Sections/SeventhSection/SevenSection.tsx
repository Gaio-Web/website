import React from 'react';
import { Container } from './styles';
import CopyToClipboardButton from '../../../../global/CopyToClipboard';

interface ISeventhSectionProp {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  mainColor: string;
  secondaryColor: string;
  neightborhood: string;
  btnColor?: string;
}

const VoouPIX = (): JSX.Element => {
    return (
        <>
            <p>comercial@voouviagens.com.br</p>
            <p>Agência <strong>001</strong></p>
            <p>Conta <strong>41903940-9</strong></p>
            <p>CNPJ <strong>51.121.311/0001-40</strong> </p>
        </>
    )
}

function SeventhSection({ mainColor, secondaryColor, neightborhood, zipCode, street, number, city, state, complement, btnColor}: ISeventhSectionProp): JSX.Element{
    return (
        <Container>
            <div id='seventhSection' className="seventh-wrapper">
                <h1 className="sectionTitle" style={{ color: mainColor }}>
                    { import.meta.env.VITE_USER_ID == '351933308275' ? (
                        <>
                        Nosso PIX
                        </>
                    ):(
                        <>
                        Endereço
                        </>
                    )}
                </h1>
                <div className="adressWrapper">
                    <div className="userAdress">
                        {import.meta.env.VITE_USER_ID == '351933308275' ? (
                            <>
                                <VoouPIX />
                            </>
                        ) : (
                            <>
                                {zipCode == '' ? (
                                    <p>
                                        Rua exemplo, 45, 302, <br /> sua cidade / estado
                                    </p>
                                ) : (
                                    <p>
                                        {street}, {neightborhood}, {number}, {complement}
                                        <br />
                                        {city}/{state}
                                    </p>
                                )}
                            </>
                        )}
                    </div>

                    <div
                        style={{
                            width: '100%',
                            paddingLeft: '1rem',
                            paddingRight: '1rem',
                            boxSizing: 'border-box'
                        }}
                    >
                    {import.meta.env.VITE_USER_ID == '351933308275' ? (
                            <>
                                <CopyToClipboardButton
                                    btnColor={btnColor}
                                    text='Copiar dados do PIX'
                                    path={'comercial@voouviagens.com.br'}
                                />
                            </>
                        ) : (
                            <>
                                <CopyToClipboardButton
                                    text='Copiar endereço'
                                    path={`${street}, ${neightborhood}, ${number}, ${complement} ${city}, ${state}, ${zipCode}`}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
}
export { SeventhSection };
