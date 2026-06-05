/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ConsultingFormData {
  name: string;
  phone: string;
  businessField: string;
  worries: string;
  desiredCourse: string;
}

export interface ProblemCard {
  id: number;
  text: string;
  emoji: string;
}

export interface SolutionPoint {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface CourseCard {
  id: number;
  title: string;
  description: string;
  tags: string[];
  details: string[];
  iconName: string;
}

export interface StepItem {
  id: number;
  step: string;
  title: string;
  description: string;
}

export interface DifferenceCard {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ReviewCard {
  id: number;
  quote: string;
  author: string;
  business: string;
  badge: string;
  rating: number;
}
