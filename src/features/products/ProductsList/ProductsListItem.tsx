/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Typography } from 'antd';
import { Product } from '../product.interface';

const { Paragraph, Text } = Typography;

type Props = {
  product: Product;
};

const ProductsListItem: React.FC<Props> = ({ product }) => {
  const { title, status, description } = product;

  return (
    <Card title={title} extra={<a href="#">More</a>}>
      <Paragraph>
        <Text strong>Status: </Text>
        {status}
      </Paragraph>
      <Paragraph>{description}</Paragraph>
    </Card>
  );
};

export default ProductsListItem;
