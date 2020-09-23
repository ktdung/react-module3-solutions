import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { sellers, items } from "../data";

import Button from "./Button";

const ItemDetails = () => {
  const { itemId } = useParams();

  const currentItem = items[itemId];
  const seller = sellers[currentItem.sellerId];

  const itemInStock = currentItem.quantity > 0;

  return (
    <Wrapper>
      <BigPic src={currentItem.imageSrc} />
      <Details>
        <Name>{currentItem.name}</Name>
        <LatinName>{currentItem.latinName}</LatinName>
        <Description>{currentItem.description}</Description>
        <CountryOfOrigin>
          Product of <strong>{currentItem.countryOfOrigin}</strong>
        </CountryOfOrigin>

        {itemInStock ? (
          <Button>${currentItem.price} - Buy now</Button>
        ) : (
          <OutOfStock>Out of Stock</OutOfStock>
        )}

        <SellerInfo>
          <SellerImg src={seller.avatarSrc} alt="portrait of store owner" />
          <span>
            Sold by:
            <StoreName>{seller.storeName}</StoreName>
          </span>
        </SellerInfo>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const BigPic = styled.img`
  display: block;
  width: 360px;
  height: 360px;
  border-radius: 16px;
`;

const Details = styled.section`
  flex: 1;
  margin-left: 48px;
`;

const Name = styled.h3`
  font-size: 32px;
  color: #333;
`;

const LatinName = styled.h5`
  color: #999;
  font-style: italic;
  font-size: 18px;
  font-weight: 300;
`;

const Description = styled.div`
  margin-top: 32px;
`;
const CountryOfOrigin = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  font-style: italic;
  color: #444;
`;

const SellerInfo = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 12px;
`;

const SellerImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transform: scale(1.25);
  margin-right: 16px;
`;

const StoreName = styled.span`
  font-weight: bold;
  padding-left: 8px;
  padding-right: 32px;
`;

const OutOfStock = styled.div`
  padding: 24px;
  margin-top: 8px;
  color: #888;
  font-style: italic;
  border: 3px dashed;
  text-align: center;
  border-radius: 12px;
  cursor: not-allowed;
`;

export default ItemDetails;
