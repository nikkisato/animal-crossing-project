import { AnimalCrossingVillager } from '@src/utils/AllVillagersProps';
import Image from 'next/image';
import { Box, Card, Flex, Heading, Text, Blockquote, Inset } from '@radix-ui/themes';
import styles from './Card.module.css';

export default function CardComponent({ villager }: { villager: AnimalCrossingVillager }) {
  const {
    name,
    species,
    image_url,
    personality,
    title_color,
    text_color,
    phrase,
    quote,
    sign,
    birthday_day,
    birthday_month,
    gender,
  } = villager;
  return (
    <Box
      maxWidth="250px"
      className={styles.card}
    >
      <Card>
        <Flex
          gap="3"
          align="center"
        >
          <Inset
            clip="padding-box"
            side="top"
            pb="current"
          >
            <Image
              src={image_url}
              alt={name}
              width={100}
              height={100}
              style={{
                display: 'block',
                objectFit: 'contain',
                width: 100,
                height: 100,
                backgroundColor: 'var(--gray-5)',
              }}
            />
          </Inset>

          <Box>
            <Heading
              as="h2"
              size="2"
            >
              Name: {name}
            </Heading>

            <Text
              as="p"
              size="2"
              color="gray"
            >
              Species: {species}
            </Text>
            <Text
              as="p"
              size="2"
              color="gray"
            >
              Gender: {gender}
            </Text>
            <Text
              as="p"
              size="2"
              color="gray"
            >
              Personality: {personality}
            </Text>
            <Blockquote>{quote}</Blockquote>
            <Text
              as="p"
              size="2"
              color="gray"
            >
              Phrase: {phrase}
            </Text>
            <Text
              as="p"
              size="2"
              color="gray"
            >
              Sign: {sign}
            </Text>
            <Text
              as="p"
              size="2"
              color="gray"
            >
              {birthday_month} / {birthday_day}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}
