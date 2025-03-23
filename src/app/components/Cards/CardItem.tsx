'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScryfallCard } from '@/app/types/scryfallTypes'

interface CardItemProps {
  card: ScryfallCard
  quality?: 'small' | 'normal' | 'large' | 'png'
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function CardItem({ card, quality = 'normal' }: CardItemProps) {
  const getImageUrl = (): string | undefined => {
    return (
      card.image_uris?.[quality] ||
      card.image_uris?.normal ||
      card.image_uris?.png ||
      card.image_uris?.large ||
      card.image_uris?.small ||
      card.card_faces?.[0]?.image_uris?.[quality] ||
      card.card_faces?.[0]?.image_uris?.normal ||
      card.card_faces?.[0]?.image_uris?.png ||
      card.card_faces?.[0]?.image_uris?.large ||
      card.card_faces?.[0]?.image_uris?.small
    )
  }

  const imageUrl = getImageUrl()
  if (!imageUrl) return null

  return (
    <Link href={`/cards/${card.id}`} className="block">
      <motion.div
        className="card-item cursor-pointer transition-transform duration-200"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={imageUrl}
          alt={card.name}
          className="w-full h-auto object-cover rounded-3xl shadow-lg"
          width={500}
          height={700}
          priority
        />
      </motion.div>
    </Link>
  )
}