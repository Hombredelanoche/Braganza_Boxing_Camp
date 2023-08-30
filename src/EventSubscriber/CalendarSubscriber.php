<?php

namespace App\EventSubscriber;

use App\Repository\TrainingRepository;
use CalendarBundle\CalendarEvents;
use CalendarBundle\Entity\Event;
use CalendarBundle\Event\CalendarEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class CalendarSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private TrainingRepository $trainingRepository,
        private UrlGeneratorInterface $router
    ) {
    }

    public static function getSubscribedEvents()
    {
        return [
            CalendarEvents::SET_DATA => 'onCalendarSetData',
        ];
    }

    public function onCalendarSetData(CalendarEvent $calendarEvent)
    {
        $start = $calendarEvent->getStart();
        $end = $calendarEvent->getEnd();
        $filters = $calendarEvent->getFilters();

        $trainings = $this->trainingRepository
            ->createQueryBuilder('training')
            ->where('training.beginAt BETWEEN :start and :end OR training.endAt BETWEEN :start and :end')
            ->setParameter('start', $start->format('d-m-Y H-i-s'))
            ->setParameter('end', $end->format('d-m-Y H-i-s'))
            ->getQuery()
            ->getResult();


        foreach ($trainings as $training) {
            $trainingEvent = new Event(
                $training->getTitle(),
                $training->getDescription(),
                $training->getCity(),
                $training->getPlace(),
                $training->getBeginAt(),
                $training->getEndAt(),
                $training->getCreatedBy()
            );

            $trainingEvent->setOptions([
                'backgroundColor' => '#568259',
                'borderColor' => 'none',
                'color' => 'white'
            ]);

            $trainingEvent->addOption(
                'url',
                $this->router->generate('app_training_show', [
                    'id' => $training->getId()
                ])
            );
            $calendarEvent->addEvent($trainingEvent);
        }
    }
}
