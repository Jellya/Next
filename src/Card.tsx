import React, { FunctionComponent } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Chip } from '@material-ui/core';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
  }

type CardProps = {
    titleItem: string,
    descriptionItem: string,
    comissionItem: string
}

export const Card:FunctionComponent<CardProps> = ({titleItem, descriptionItem, comissionItem}) => {
    return (
    <React.Fragment>
      <Title>{titleItem}</Title>
      <Typography component="p" variant="h5">
        {descriptionItem}
      </Typography>
      <Typography color="textSecondary">
        <Chip color="primary" label={comissionItem} icon={<LocalAtmIcon />}/>
      </Typography>
        <Link color="primary" href="#" onClick={preventDefault}>
          More info...
        </Link>
    </React.Fragment>
    )
}

export default Card