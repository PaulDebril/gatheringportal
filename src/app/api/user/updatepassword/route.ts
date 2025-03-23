import { NextResponse } from 'next/server';

export async function PUT() {
  try {
    // A FAIREEEEE


    return NextResponse.json(
      { message: 'Mot de passe mis à jour avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de la mise à jour du mot de passe', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du mot de passe' },
      { status: 500 }
    );
  }
}