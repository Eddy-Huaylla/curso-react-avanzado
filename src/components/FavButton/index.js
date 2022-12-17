import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ( { liked, likes, onClick, loading } ) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return <Button onClick = { onClick } disabled = { loading }>
    <Icon size='32px' /> {likes} likes!
  </Button>
}
