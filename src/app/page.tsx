import { ChatWindow } from '@/components/ChatWindow';
import { GuideInfoBox } from '@/components/guide/GuideInfoBox';

import { LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { auth0 } from '@/lib/auth0';

export default async function Home() {
  const session = await auth0.getSession();
  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] my-auto">
        <h2 className="text-xl">You are not logged in</h2>

        <div className="flex gap-4 mt-6">
          <Button asChild variant="default" size="default">
            <a href="/auth/login" className="flex items-center gap-2">
              <LogIn />
              <span>Login</span>
            </a>
          </Button>

          <Button asChild variant="default" size="default">
            <a href="/auth/login?screen_hint=signup" className="flex items-center gap-2">
              <UserPlus />
              <span>Sign up</span>
            </a>
          </Button>
        </div>
      </div>
    );
  }
  const InfoCard = (
    <GuideInfoBox>
      <ul>
        <li className="text-l">
          <span className="ml-2">
            Welcome to LangCore - Your secure, multi-step interactive AI assistant powered by{' '}
            <a className="text-blue-500" href="https://langchain-ai.github.io/langgraphjs/" target="_blank">
              LangGraph.js
            </a>{' '}
            and{' '}
            <a className="text-blue-500" href="https://nextjs.org/" target="_blank">
              Next.js
            </a>
            .
          </span>
        </li>
        <li className="text-l">
          <span className="ml-2">Secured with Auth0 authentication to keep your interactions private and safe.</span>
        </li>
      </ul>
    </GuideInfoBox>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      image="images/logo.png"
      placeholder="I'm your personal assistant. How can I help you today?"
      emptyStateComponent={InfoCard}
    />
  );
}
