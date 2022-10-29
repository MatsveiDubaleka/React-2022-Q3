import React from 'react';
import { Flex } from '../../styles/Flex';
import { Button, Card, CardContent, Typography, Modal, Box } from '@mui/material';
import { ICard } from '../../interfaces/ICard';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid #000;
  boxshadow: 24;
  p: 4;
`;

const Product: React.FC<ICard> = (props: ICard) => {
  const [openModal, setOpenModal] = React.useState(false);
  const { _id, birth, death, gender, hair, height, name, race, realm, spouse, wikiUrl } = props;
  return (
    <>
      <Card raised={true} sx={{ bgcolor: 'background.paper' }}>
        <CardContent>
          <Flex
            width={'100%'}
            direction={'column'}
            style={{ width: '25vw' }}
            align={'flex-start'}
            justify={'space-between'}
          >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {_id}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Button
              onClick={() => {
                setOpenModal(true);
              }}
            >
              More Info
            </Button>
            <Modal
              open={openModal}
              onClose={() => {
                setOpenModal(false);
              }}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <StyledBox>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Birth: {birth === '' ? 'Not Found' : birth}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Death: {death === '' ? 'Not Found' : death}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Gender: {gender === '' ? 'Not Found' : gender}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Hair: {hair === '' ? 'Not Found' : hair}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Height: {height === '' ? 'Not Found' : height}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Race: {race === '' ? 'Not Found' : race}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Realm: {realm === '' ? 'Not Found' : realm}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Spouse: {spouse === '' ? 'Not Found' : spouse}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  WikiURL:{' '}
                  <a href={wikiUrl} target="_blank" style={{ padding: '40px 0' }} rel="noreferrer">
                    {wikiUrl === '' ? 'Not Found' : wikiUrl}
                  </a>
                </Typography>
              </StyledBox>
            </Modal>
          </Flex>
        </CardContent>
      </Card>
    </>
  );
};
export default Product;
