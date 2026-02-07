import { Moon, User, Mountain, Compass, Heart, Settings } from "lucide-preact";

export const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&q=80&w=800";

export const MOCK_DATA = {
  popular: [
    {
      id: 1,
      title: "Seasons of Nigeria: Sokoto",
      subtitle: "Chiké Okonkwo",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
      category: "Sleep Story",
      duration: "30 min",
    },
    {
      id: 2,
      title: "One-Minute Reset",
      subtitle: "Chibs Okereke",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800",
      category: "Meditation",
      duration: "1 min",
    },
    {
      id: 3,
      title: "Deep Sleep Release",
      subtitle: "Tamara Levitt",
      image:
        "https://images.unsplash.com/photo-1511295742362-92c96b5add36?auto=format&fit=crop&q=80&w=800",
      category: "Meditation",
      duration: "25 min",
    },
  ],
  dailies: [
    {
      id: 4,
      title: "Daily Move",
      subtitle: "Flowing Through Grief",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
      category: "Movement",
      duration: "10 min",
    },
    {
      id: 5,
      title: "Daily Calm",
      subtitle: "Hakuna Matata",
      image:
        "https://images.unsplash.com/photo-1499209974431-2761e25236d0?auto=format&fit=crop&q=80&w=800",
      category: "Meditation",
      duration: "10 min",
    },
    {
      id: 6,
      title: "White Noise Ocean Surf",
      subtitle: "Soundscape",
      image:
        "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=800",
      category: "Music",
      duration: "60 min",
    },
  ],
  sleepStories: [
    {
      id: 7,
      title: "Ludo & Sierra's Icicle Symphony",
      subtitle: "Phillipa Alexander",
      image:
        "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=800",
      category: "Kids",
      duration: "35 min",
    },
    {
      id: 8,
      title: "Humphrey in the Bahamas",
      subtitle: "Michael Griffiths",
      image:
        "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=800",
      category: "Kids",
      duration: "36 min",
    },
    {
      id: 9,
      title: "The Nordland Night Train",
      subtitle: "Erik Braa",
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800",
      category: "Train",
      duration: "40 min",
    },
  ],
  categories: [
    { name: "Sleep", icon: Moon },
    { name: "Meditation", icon: User },
    { name: "Music", icon: Mountain },
    { name: "Mindful Tools", icon: Compass },
    { name: "Calm Lifestyle", icon: Heart },
    { name: "Reflections", icon: Settings },
  ],
};
