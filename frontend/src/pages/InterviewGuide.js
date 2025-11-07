import React, { useState, useEffect, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import FlashCard from '../components/FlashCard';
import { interviewData } from '../mock';
import { Filter, RotateCcw, BookOpen, Award, Target, Building2 } from 'lucide-react';

const InterviewGuide = () => {
  const [activeTab, setActiveTab] = useState('projectManagement');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [reviewedCards, setReviewedCards] = useState({});

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('interviewProgress');
    if (saved) {
      setReviewedCards(JSON.parse(saved));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('interviewProgress', JSON.stringify(reviewedCards));
  }, [reviewedCards]);

  const toggleReview = (category, id) => {
    setReviewedCards(prev => ({
      ...prev,
      [category]: {
        ...(prev[category] || {}),
        [id]: !(prev[category]?.[id] || false)
      }
    }));
  };

  const resetProgress = (category) => {
    setReviewedCards(prev => ({
      ...prev,
      [category]: {}
    }));
  };

  const filteredData = useMemo(() => {
    const data = interviewData[activeTab] || [];
    if (selectedDifficulty === 'all') return data;
    return data.filter(item => item.difficulty === selectedDifficulty);
  }, [activeTab, selectedDifficulty]);

  const progressData = useMemo(() => {
    const total = interviewData[activeTab]?.length || 0;
    const reviewed = Object.values(reviewedCards[activeTab] || {}).filter(Boolean).length;
    return {
      total,
      reviewed,
      percentage: total > 0 ? Math.round((reviewed / total) * 100) : 0
    };
  }, [activeTab, reviewedCards]);

  const tabs = [
    { id: 'projectManagement', label: 'Project Management', icon: Target },
    { id: 'programManagement', label: 'Program Management', icon: BookOpen },
    { id: 'aiSkills', label: 'AI Skills for Tech Leaders', icon: Award },
    { id: 'gccDomain', label: 'GCC Domain', icon: Building2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Interview Preparation Guide</h1>
              <p className="text-slate-600 mt-2">FAANG/MAANG & GCC Domain Interview Questions</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-600">Your Progress</div>
              <div className="text-2xl font-bold text-blue-600">{progressData.percentage}%</div>
              <div className="text-xs text-slate-500">{progressData.reviewed} / {progressData.total} reviewed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Tabs List */}
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 bg-white p-2 rounded-lg shadow-sm">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white flex items-center gap-2 py-3"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tab Content */}
          {tabs.map(tab => (
            <TabsContent key={tab.id} value={tab.id} className="space-y-6">
              {/* Controls Card */}
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Progress Bar */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">Progress</span>
                        <span className="text-sm text-slate-600">
                          {progressData.reviewed} / {progressData.total} cards reviewed
                        </span>
                      </div>
                      <Progress value={progressData.percentage} className="h-2" />
                    </div>

                    {/* Filters */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-slate-600" />
                        <span className="text-sm font-medium text-slate-700">Difficulty:</span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant={selectedDifficulty === 'all' ? 'default' : 'outline'}
                          onClick={() => setSelectedDifficulty('all')}
                          className="transition-all"
                        >
                          All ({interviewData[activeTab]?.length || 0})
                        </Button>
                        <Button
                          size="sm"
                          variant={selectedDifficulty === 'basic' ? 'default' : 'outline'}
                          onClick={() => setSelectedDifficulty('basic')}
                          className="transition-all"
                        >
                          Basic
                        </Button>
                        <Button
                          size="sm"
                          variant={selectedDifficulty === 'intermediate' ? 'default' : 'outline'}
                          onClick={() => setSelectedDifficulty('intermediate')}
                          className="transition-all"
                        >
                          Intermediate
                        </Button>
                        <Button
                          size="sm"
                          variant={selectedDifficulty === 'advanced' ? 'default' : 'outline'}
                          onClick={() => setSelectedDifficulty('advanced')}
                          className="transition-all"
                        >
                          Advanced
                        </Button>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => resetProgress(activeTab)}
                        className="text-slate-600 hover:text-slate-900"
                      >
                        <RotateCcw className="w-4 h-4 mr-1" />
                        Reset
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Flashcards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.map(card => (
                  <FlashCard
                    key={card.id}
                    question={card.question}
                    answer={card.answer}
                    difficulty={card.difficulty}
                    isReviewed={reviewedCards[activeTab]?.[card.id] || false}
                    onToggleReview={() => toggleReview(activeTab, card.id)}
                  />
                ))}
              </div>

              {filteredData.length === 0 && (
                <Card className="shadow-md">
                  <CardContent className="py-12 text-center">
                    <p className="text-slate-500">No questions found for the selected difficulty level.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default InterviewGuide;
