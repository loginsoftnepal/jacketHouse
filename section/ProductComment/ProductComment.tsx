import React from 'react'
import UserImage from '../../image/man 1.png'
import ProductCommentItem from './ProductCommentItem'

function ProductComment() {
  const comment = [
    {
      avatar: UserImage,
      name: 'Susma',
      review:
        'This product I bought for first time from Jacket House and I am too much satisfied and comfortable to ware to a body. The order was exactly the same as I have seen on the website.',
      rating: 4,
    },
    {
      avatar: UserImage,
      name: 'Susma',
      review:
        'This product I bought for first time from Jacket House and I am too much satisfied and comfortable to ware to a body. The order was exactly the same as I have seen on the website.',
      rating: 4,
    },
    {
      avatar: UserImage,
      name: 'Susma',
      review:
        'This product I bought for first time from Jacket House and I am too much satisfied and comfortable to ware to a body. The order was exactly the same as I have seen on the website.',
      rating: 4,
    },
    {
      avatar: UserImage,
      name: 'Susma',
      review:
        'This product I bought for first time from Jacket House and I am too much satisfied and comfortable to ware to a body. The order was exactly the same as I have seen on the website.',
      rating: 4,
    },
    {
      avatar: UserImage,
      name: 'Susma',
      review:
        'This product I bought for first time from Jacket House and I am too much satisfied and comfortable to ware to a body. The order was exactly the same as I have seen on the website.',
      rating: 4,
    },
    {
      avatar: UserImage,
      name: 'Susma',
      review:
        'This product I bought for first time from Jacket House and I am too much satisfied and comfortable to ware to a body. The order was exactly the same as I have seen on the website.',
      rating: 4,
    },
    {
      avatar: UserImage,
      name: 'Susma',
      review:
        'This product I bought for first time from Jacket House and I am too much satisfied and comfortable to ware to a body. The order was exactly the same as I have seen on the website.',
      rating: 4,
    },
  ]

  return (
    <div>
      <h1 className="my-4 text-xl font-semibold text-darkWheat">
        What other people say about the product?
      </h1>
      <div>
        {comment &&
          comment.map((comment, index) => {
            return (
              <ProductCommentItem
                key={index}
                img={comment.avatar}
                name={comment.name}
                review={comment.review}
                rating={comment.rating}
              />
            )
          })}
      </div>
    </div>
  )
}

export default ProductComment
