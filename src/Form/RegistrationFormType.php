<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

use function PHPSTORM_META\type;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, ["label" => "Nom"])
            ->add('firstname', TextType::class, ["label" => "Prénom"])
            ->add('email', RepeatedType::class, [
                'type' => EmailType::class,
                'first_options' => ["label" => "Email"],
                'second_options' => ["label" => "Vérification email"]
            ])
            ->add('plainPassword', RepeatedType::class, [
                "type" => PasswordType::class,
                "first_options" => ["label" => "Mot de passe", "hash_property_path" => "password"],
                "second_options" => ["label" => "Vérifier votre mot de passe"],
                "mapped" => false,
                "attr" => ["autocomplete" => "new-password"]
            ])

            ->add('phone', TelType::class, ["label" => "Téléphone"])
            ->add('birthday', DateType::class, ["label" => "Date de naissance", "input" => "datetime_immutable", 'widget' => 'single_text'])
            ->add('genre', ChoiceType::class, [
                'choices' => [
                    'Homme' => 'homme',
                    'Femme' => 'femme',
                    'Autre' => 'autre'
                ]
            ])
            ->add('createdAt', HiddenType::class, [])
            ->add('agreeTerms', CheckboxType::class, [
                "mapped" => false,
                "constraints" => [
                    new IsTrue([
                        "message" => "You should agree to our terms.",
                    ]),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
