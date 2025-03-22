"use client";
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import Image from 'next/image';
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface AuthFormData {
  username?: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword?: string;
}

const schema = yup.object({
  username: yup.string().when('$isSignUp', {
    is: true,
    then: (schema) => schema.required("Le nom d'utilisateur est requis"),
    otherwise: (schema) => schema.notRequired(),
  }),
  email: yup.string().email('Email invalide').required("L'email est requis"),
  phone: yup.string().when('$isSignUp', {
    is: true,
    then: (schema) =>
      schema.min(10, 'Le numéro de téléphone doit contenir au moins 10 chiffres').required(),
    otherwise: (schema) => schema.notRequired(),
  }),
  password: yup
    .string()
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
    .required('Le mot de passe est requis'),
  confirmPassword: yup.string().when('$isSignUp', {
    is: true,
    then: (schema) =>
      schema.oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas').required(),
    otherwise: (schema) => schema.notRequired(),
  }),
});


export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthFormData>({
    resolver: yupResolver(schema, { context: { isSignUp } }),
  });

  const onSubmit: SubmitHandler<AuthFormData> = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = isSignUp ? '/api/auth/signup' : '/api/auth/login';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Une erreur est survenue');
      }
      reset();
      router.push('/');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Une erreur inconnue est survenue');
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    reset();
  };

  return (
    <div className={`min-h-screen flex transition-all duration-500 ${isSignUp ? 'flex-row-reverse' : ''}`}>
      <div className="w-1/2 flex flex-col items-center justify-center p-12 text-gray-100 transition-all duration-500">
        <h2 className="text-4xl mb-6 beleren-font">
          {isSignUp ? 'CRÉER UN COMPTE' : 'SE CONNECTER'}
        </h2>
        <div className="flex space-x-4 mb-4">
          <button className="p-2 border border-gray-700 rounded-full">
            <FaGoogle />
          </button>
          <button className="p-2 border border-gray-700 rounded-full">
            <FaApple />
          </button>
        </div>
        <p className="text-gray-400 mb-4">
          {isSignUp
            ? 'ou créez un compte avec votre email'
            : 'ou utilisez votre compte'}
        </p>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4 text-center">
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                {...register('username')}
                className="w-1/2 px-4 py-2 border border-gray-700 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>
          )}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              className="w-1/2 px-4 py-2 border border-gray-700 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="Numéro de téléphone"
                {...register('phone')}
                className="w-1/2 px-4 py-2 border border-gray-700 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
          )}
          <div className="relative w-1/2 mx-auto">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Mot de passe"
              {...register('password')}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          {isSignUp && (
            <div className="relative w-1/2 mx-auto">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirmer le mot de passe"
                {...register('confirmPassword')}
                className="w-full px-4 py-2 border border-gray-700 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>
          )}
          {!isSignUp && (
            <div>
              <Link href="#" className="text-blue-600 hover:underline text-sm">
                Mot de passe oublié ?
              </Link>
            </div>
          )}
          <button
            type="submit"
            className="w-1/2 bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg transition disabled:opacity-50 beleren-font"
            disabled={loading}
          >
            {loading ? 'Chargement...' : isSignUp ? "S'INSCRIRE" : 'CONNEXION'}
          </button>
        </form>
        <p className="text-gray-400 mt-4">
          {isSignUp ? 'Déjà un compte ?' : 'Pas encore de compte ?'}{' '}
          <button onClick={toggleMode} className="text-yellow-600 font-bold hover:underline">
            {isSignUp ? 'Se connecter' : "S'inscrire"}
          </button>
        </p>
      </div>
      <div className="w-1/2 h-screen relative transition-all duration-500">
        <Image
          src="/images/imggathering.png"
          alt="Illustration fantasy"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>
    </div>
  );
}
