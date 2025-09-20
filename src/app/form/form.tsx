'use client';

import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { save } from '@/app/action/save';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';

export default function Form() {
    const [state, action] = useActionState(save, undefined);

    return (
        <form action={action}>
            <div className="flex flex-col gap-2">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" />
                </div>
                {state?.errors?.name && (
                    <p className="text-sm text-red-500">{state.errors.name}</p>
                )}
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" placeholder="john@example.com" />
                </div>
                {state?.errors?.email && (
                    <p className="text-sm text-red-500">{state.errors.email}</p>
                )}
                <div>
                    <Label htmlFor="passport">Passport</Label>
                    <Input id="passport" name="passport" type="text" placeholder='J781A9e' />
                </div>
                {state?.errors?.passport && (
                    <div className="text-sm text-red-500">
                        <p>Passport must:</p>**
                        <ul>
                            {state.errors.passport.map((error: any) => (
                                <li key={error}>- {error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <SignupButton />
            </div>
        </form>
    );
}

export function SignupButton() {
    const { pending } = useFormStatus();

    return (
        <Button aria-disabled={pending} type="submit" className="mt-2 w-full">
            {pending ? 'Submitting...' : 'Save'}
        </Button>
    );
}
