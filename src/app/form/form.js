import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// swx@2WS
// Zod schema for form validation
const schema = z.object({
    name: z.string().min(2).max(50).required(),
    email: z.string().email().required(),
    message: z.string().min(10).required(),
});