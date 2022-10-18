import React, { Component } from 'react';
import { Flex } from '../../styles/Flex';
import { Button, Card, CardContent, Typography, Modal, Box } from '@mui/material';
import { ICard } from '../../interfaces/ICard';
import styled from 'styled-components';

interface IProps {
  openModal: boolean;
}

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid #000;
  boxshadow: 24;
  p: 4;
`;

export default class Product extends Component<ICard, IProps> {
  constructor(props: ICard) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  render() {
    const { birth, death, name } = this.props;

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
                {birth}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {death}
              </Typography>
              <Button
                onClick={() => {
                  this.setState({ openModal: true });
                }}
              >
                More Info
              </Button>
              <Modal
                open={this.state.openModal}
                onClose={() => {
                  this.setState({ openModal: false });
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <StyledBox>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ea
                    distinctio soluta minima quas debitis, voluptas exercitationem velit consequatur
                    necessitatibus.
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
                </StyledBox>
              </Modal>
            </Flex>
          </CardContent>
        </Card>
      </>
    );
  }
}
