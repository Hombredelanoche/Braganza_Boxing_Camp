<?php

namespace App\Form;

use App\Entity\Training;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TrainingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('beginAt', DateType::class, [
                'input' => 'datetime_immutable'
            ])
            ->add('endAt', DateType::class, [
                'input' => 'datetime_immutable'
            ])
            ->add('title', TextType::class)
            ->add('place', TextType::class)
            ->add('city', TextType::class)
            ->add('description', TextareaType::class)
            ->add('user', EntityType::class, [
                "class" => User::class
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Training::class,
        ]);
    }
}
