import React from 'react';
import { Container, IconWrapper } from './styles';
import { GrInstagram } from 'react-icons/gr';
import { AiFillInstagram } from 'react-icons/ai'
import Insta from '../../../../assets/svg/insta.png'
import Face from '../../../../assets/svg/face.png'
import Whats from '../../../../assets/svg/whats.png'

interface IHeaderSectionProp {
  photoBase64?: string;
  secondaryColor?: string;
  name: string;
  insta: string;
  face?: string;
  whats?: string;
  color: string;
}

function HeaderSection({ photoBase64, secondaryColor, name, insta, whats, face, color }: IHeaderSectionProp): JSX.Element {
    return (
        <Container style={{ justifyContent: insta ?  'space-between' : 'center'}} bgColor={color}>
            {
                photoBase64 === '' ? (

                    <h1 style={{ color: secondaryColor }}>{name}</h1>
                ): (
                    <img className="logo" src={photoBase64}/>
                )
            }
            <IconWrapper>
            {insta === '' ? (
                <></>
            ) : (
                <a className='icon' href={`https://instagram.com/${insta}`} target='blank'>
                    <img className='badge' src={Insta} />
                   {
                    face === '' || face === undefined && whats === '' || whats === undefined ? (
                        <p>@{insta}</p>
                    ):(
                        <> 
                        </>
                    )
                   } 
                </a>
            )}
            {
                face === '' || face === undefined ? (
                    <>
                    </>
                ) : (
                    <a className='icon' href={face} target='blank'>
                        <img className='badge' src={Face} />
                    </a>
                )
            }
            {
                whats === '' || whats === undefined ? (
                    <>
                    </>
                ) : (
                    <a className='icon' href={`https://wa.me/${whats}`} target='blank'>
                        <img className='badge' src={Whats} />
                    </a>
                )
            }
            </IconWrapper>
        </Container>
    );
}

export { HeaderSection };
