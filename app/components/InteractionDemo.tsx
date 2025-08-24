"use client"

import React, { useState } from 'react';
import { Check, Star, Heart, ThumbsUp, Settings, Users, Globe } from 'lucide-react';

interface InteractionDemoProps {
  title?: string;
  description?: string;
}

export default function InteractionDemo({ 
  title = "Système d'Interactions Modernes",
  description = "Découvrez les nouveaux patterns de sélection/désélection avec animations fluides et feedback haptique."
}: InteractionDemoProps) {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set(['item1']));
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({
    notifications: true,
    darkMode: false,
    autoSave: true
  });
  const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>({
    terms: true,
    newsletter: false,
    updates: true
  });
  const [radioValue, setRadioValue] = useState<string>('option1');
  const [loadingItems, setLoadingItems] = useState<Set<string>>(new Set());

  const handleItemSelect = (itemId: string) => {
    setLoadingItems(prev => new Set(prev).add(itemId));
    
    // Simuler un délai de traitement
    setTimeout(() => {
      setSelectedItems(prev => {
        const newSet = new Set(prev);
        if (newSet.has(itemId)) {
          newSet.delete(itemId);
        } else {
          newSet.add(itemId);
        }
        return newSet;
      });
      
      setLoadingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }, 400);
  };

  const handleToggle = (key: string) => {
    setToggleStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleCheckbox = (key: string) => {
    setCheckboxStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const demoItems = [
    { id: 'item1', label: 'Interface moderne', icon: Star, color: 'blue' },
    { id: 'item2', label: 'Animations fluides', icon: Heart, color: 'purple' },
    { id: 'item3', label: 'Feedback haptique', icon: ThumbsUp, color: 'green' },
    { id: 'item4', label: 'Thème sombre', icon: Settings, color: 'orange' }
  ];

  const toggleOptions = [
    { key: 'notifications', label: 'Notifications push', icon: Users },
    { key: 'darkMode', label: 'Mode sombre avancé', icon: Settings },
    { key: 'autoSave', label: 'Sauvegarde automatique', icon: Check }
  ];

  const checkboxOptions = [
    { key: 'terms', label: 'J\'accepte les conditions d\'utilisation' },
    { key: 'newsletter', label: 'Recevoir la newsletter hebdomadaire' },
    { key: 'updates', label: 'Notifications de mise à jour' }
  ];

  const radioOptions = [
    { value: 'option1', label: 'Performances optimales' },
    { value: 'option2', label: 'Économie d\'énergie' },
    { value: 'option3', label: 'Mode équilibré' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Grid de démonstration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Section 1: Liste sélectionnable */}
        <div className="card-interactive space-y-4">
          <h3 className="text-xl font-semibold text-gray-100 flex items-center space-x-2">
            <Globe className="w-5 h-5 text-blue-400" />
            <span>Éléments sélectionnables</span>
          </h3>
          
          <div className="selection-group space-y-3">
            {demoItems.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedItems.has(item.id);
              const isLoading = loadingItems.has(item.id);
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemSelect(item.id)}
                  disabled={isLoading}
                  className={`
                    list-item-interactive w-full flex items-center space-x-3 p-4 rounded-xl
                    ${isSelected ? 'selected' : ''} 
                    ${isLoading ? 'selection-loading' : ''} 
                    hover-glow-modern
                  `}
                >
                  <div className={`
                    p-2 rounded-lg flex items-center justify-center
                    ${isSelected 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-700 text-gray-300'
                    }
                  `}>
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-100">{item.label}</div>
                    <div className="text-sm text-gray-400">
                      {isSelected ? 'Sélectionné' : 'Cliquez pour sélectionner'}
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Boutons toggle */}
        <div className="card-interactive space-y-4">
          <h3 className="text-xl font-semibold text-gray-100">Boutons Toggle</h3>
          
          <div className="space-y-3">
            {toggleOptions.map((option) => {
              const Icon = option.icon;
              const isActive = toggleStates[option.key];
              
              return (
                <button
                  key={option.key}
                  onClick={() => handleToggle(option.key)}
                  className={`toggle-button w-full flex items-center justify-between p-4 ${isActive ? 'active' : ''}`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{option.label}</span>
                  </div>
                  
                  <div className={`
                    w-12 h-6 rounded-full transition-all duration-300 relative
                    ${isActive ? 'bg-blue-500' : 'bg-gray-600'}
                  `}>
                    <div className={`
                      absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300
                      ${isActive ? 'left-7' : 'left-1'}
                    `} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 3: Checkboxes personnalisées */}
        <div className="card-interactive space-y-4">
          <h3 className="text-xl font-semibold text-gray-100">Checkboxes Modernes</h3>
          
          <div className="space-y-3">
            {checkboxOptions.map((option) => {
              const isChecked = checkboxStates[option.key];
              
              return (
                <label
                  key={option.key}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <div
                    className={`checkbox-modern ${isChecked ? 'checked' : ''}`}
                    onClick={() => handleCheckbox(option.key)}
                  />
                  <span className="font-medium text-gray-200 group-hover:text-gray-100 transition-colors">
                    {option.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Section 4: Radio buttons personnalisés */}
        <div className="card-interactive space-y-4">
          <h3 className="text-xl font-semibold text-gray-100">Radio Buttons</h3>
          
          <div className="space-y-3">
            {radioOptions.map((option) => {
              const isSelected = radioValue === option.value;
              
              return (
                <label
                  key={option.value}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <div
                    className={`radio-modern ${isSelected ? 'checked' : ''}`}
                    onClick={() => setRadioValue(option.value)}
                  />
                  <span className="font-medium text-gray-200 group-hover:text-gray-100 transition-colors">
                    {option.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section de résumé */}
      <div className="card-interactive space-y-4">
        <h3 className="text-xl font-semibold text-gray-100">Résumé des Sélections</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
            <div className="text-sm text-gray-400">Éléments sélectionnés</div>
            <div className="text-2xl font-bold text-blue-400">{selectedItems.size}</div>
          </div>
          
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
            <div className="text-sm text-gray-400">Toggles actifs</div>
            <div className="text-2xl font-bold text-purple-400">
              {Object.values(toggleStates).filter(Boolean).length}
            </div>
          </div>
          
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
            <div className="text-sm text-gray-400">Checkboxes cochées</div>
            <div className="text-2xl font-bold text-green-400">
              {Object.values(checkboxStates).filter(Boolean).length}
            </div>
          </div>
          
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
            <div className="text-sm text-gray-400">Radio sélectionné</div>
            <div className="text-lg font-bold text-orange-400">{radioValue}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
