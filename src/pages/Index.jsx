import React from "react";
import { Box, Container, Heading, List, ListItem, LinkBox, LinkOverlay, Text, VStack, HStack, useColorModeValue, IconButton, Tooltip } from "@chakra-ui/react";
import { FaRegCommentAlt, FaExternalLinkAlt, FaAngleUp } from "react-icons/fa";

// Mock data for the Hacker News posts
const newsItems = [
  {
    id: 1,
    title: "Announcing the new MacBook Pro with M2 chip",
    url: "https://www.apple.com/macbook-pro-m2",
    points: 156,
    author: "johndoe",
    time: "3 hours ago",
    comments: 45,
  },
  // ... add more items
];

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("gray.900", "gray.50");

  return (
    <Container maxW="container.md" p={4} bg={bg} color={color}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="lg">
          Hacker News Clone
        </Heading>
        <List spacing={3}>
          {newsItems.map((newsItem) => (
            <ListItem key={newsItem.id} p={3} bg={useColorModeValue("white", "gray.700")} borderRadius="md">
              <HStack justifyContent="space-between">
                <VStack align="start">
                  <HStack>
                    <IconButton size="sm" aria-label="upvote" icon={<FaAngleUp />} />
                    <Text fontSize="sm">{newsItem.points}</Text>
                  </HStack>
                  <LinkBox>
                    <LinkOverlay href={newsItem.url} isExternal>
                      <Heading as="h3" size="md">
                        {newsItem.title} <FaExternalLinkAlt />
                      </Heading>
                    </LinkOverlay>
                  </LinkBox>
                  <Text fontSize="sm">
                    by {newsItem.author} | {newsItem.time}
                  </Text>
                </VStack>
                <Tooltip label={`${newsItem.comments} comments`} hasArrow placement="top">
                  <Box>
                    <IconButton aria-label="comments" icon={<FaRegCommentAlt />} variant="ghost" size="sm" />
                    <Text as="span" fontSize="sm">
                      {newsItem.comments}
                    </Text>
                  </Box>
                </Tooltip>
              </HStack>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
