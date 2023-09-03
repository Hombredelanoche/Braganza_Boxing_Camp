<?php

namespace App\Form;

use App\Entity\Training;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TrainingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder

            ->add('title', TextType::class)
            ->add('description', TextareaType::class)
            ->add('place', TextType::class)
            ->add('city', TextType::class)
            ->add('createdBy', EntityType::class, [
                'label' => 'Coach',
                'class' => User::class,
                'expanded' => false,
                'multiple' => false,
                'query_builder' => function (UserRepository $ur): QueryBuilder {
                    return $ur->createQueryBuilder('u')
                        ->orderBy('u.firstname', 'ASC')
                        ->where('u.roles = USER_ADMIN');
                }
            ])
            ->add('beginAt', DateTimeType::class, [
                'required' => false,
                'input' => 'datetime_immutable',
                'date_widget' => 'single_text'
            ])
            ->add('endAt', DateTimeType::class, [
                'required' => false,
                'input' => 'datetime_immutable',
                'date_widget' => 'single_text'
            ])
            ->add('user', EntityType::class, [
                'class' => User::class,
                'choice_label' => 'name'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Training::class,
        ]);
    }
}
