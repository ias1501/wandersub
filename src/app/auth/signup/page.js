import SignUp from '../../../components/components/Auth/SignUp';
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'
import createClient from 'src/lib/supabase-server';

const page = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/');
  }
  return (
    <div><SignUp/>
    
    <Link className="button" href="/auth/signin">
          Signin
        </Link>
    </div>
  )
}

export default page