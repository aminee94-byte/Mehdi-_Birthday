import { useState } from 'react';
import { ComplimentGenerator } from './components/ComplimentGenerator';
import { FriendshipQuiz } from './components/FriendshipQuiz';
import { FutureLetter } from './components/FutureLetter';
import { JokeArchive } from './components/JokeArchive';
import { Landing } from './components/Landing';
import { SecretMessage } from './components/SecretMessage';
import { Timeline } from './components/Timeline';

export default function App() {
  const [secretUnlocked, setSecretUnlocked] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-orange-50 text-stone-900">
      <Landing />
      <Timeline />
      <ComplimentGenerator />
      <JokeArchive />
      <FriendshipQuiz onComplete={() => setSecretUnlocked(true)} />
      <FutureLetter />
      <SecretMessage unlocked={secretUnlocked} />
    </main>
  );
}
