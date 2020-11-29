import React from 'react';
import Link from 'next/link'
import { Breadcrumbs, Typography } from '@material-ui/core';

interface IProps {
  name: string;
}

const BreadCrumbs = ({ name }: IProps) => {

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="/">
        Home
      </Link>
      <Typography color="textPrimary">{name}</Typography>
    </Breadcrumbs>
  )
}

export default BreadCrumbs;